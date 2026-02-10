/* global GM_xmlhttpRequest */

// ==UserScript==
// @name         NotebookLM Prompts Panel
// @namespace    https://github.com/GMartin-Data/notebooklm-prompts
// @version      0.1.0
// @description  Show prompts from notebooklm-prompts repo and paste them into NotebookLM input.
// @author       Contributors to notebooklm-prompts
// @match        https://notebooklm.google.com/*
// @grant        GM_xmlhttpRequest
// @connect      api.github.com
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function () {
  "use strict";

  // --- Configuration ---
  const GITHUB_OWNER = "GMartin-Data";
  const GITHUB_REPO = "notebooklm-prompts";
  const GITHUB_BRANCH = "main";

  const TREE_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees/${GITHUB_BRANCH}?recursive=1`;
  const RAW_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/`;

  // --- State ---
  let promptsIndex = [];
  let panelVisible = false;

  // --- HTTP helper with GM_xmlhttpRequest (CORS-friendly in userscript context) ---
  function httpGet(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "GET",
        url,
        onload: (res) => {
          if (res.status >= 200 && res.status < 300) {
            resolve(res.responseText);
          } else {
            reject(new Error(`Request failed (${res.status}): ${url}`));
          }
        },
        onerror: () => reject(new Error(`Network error: ${url}`)),
      });
    });
  }

  // --- GitHub API: list all template files ---
  async function fetchPromptsIndex() {
    const text = await httpGet(TREE_API_URL);
    const data = JSON.parse(text);

    if (!data.tree || !Array.isArray(data.tree)) {
      throw new Error("Unexpected GitHub API response format");
    }

    const files = data.tree.filter(
      (node) => node.type === "blob" && node.path.startsWith("templates/") && node.path.endsWith(".md"),
    );

    // Build a simple structure: { id, path, category, label }
    promptsIndex = files.map((node) => {
      const parts = node.path.split("/");
      // templates/category/.../file.md
      const category = parts.length >= 3 ? parts[1] : "unknown";
      const fileName = parts[parts.length - 1];
      const id = fileName.replace(/\.md$/, "");
      const label = `${category} / ${fileName}`;

      return {
        id,
        path: node.path,
        category,
        fileName,
        label,
      };
    });

    return promptsIndex;
  }

  // --- Extract first fenced code block from markdown ---
  function extractFirstCodeBlock(markdown) {
    const fence = "```";
    const start = markdown.indexOf(fence);
    if (start === -1) {
      return null;
    }
    const rest = markdown.slice(start + fence.length);
    const end = rest.indexOf(fence);
    if (end === -1) {
      return null;
    }
    const block = rest.slice(0, end);
    // Remove optional language identifier at start of block
    const lines = block.split(/\r?\n/);
    if (lines[0].trim().match(/^[a-zA-Z0-9_-]+$/)) {
      lines.shift();
    }
    return lines.join("\n").trim();
  }

  // --- Paste text into NotebookLM input ---
  function findNotebookLMInput() {
    // Heuristic: try multiple selectors
    let el = document.querySelector("textarea");
    if (el) return el;

    el = document.querySelector('[contenteditable="true"][role="textbox"]');
    if (el) return el;

    el = document.querySelector('[contenteditable="true"]');
    return el || null;
  }

  function pasteIntoInput(text) {
    const input = findNotebookLMInput();
    if (!input) {
      alert("NotebookLM Prompts: could not find the input area. The UI may have changed.");
      return;
    }

    if (input.tagName.toLowerCase() === "textarea" || input.tagName.toLowerCase() === "input") {
      input.value = text;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    } else {
      input.innerText = text;
      const evt = new Event("input", { bubbles: true });
      input.dispatchEvent(evt);
      input.focus();
    }
  }

  // --- UI elements ---

  function createToggleButton() {
    const btn = document.createElement("button");
    btn.textContent = "NotebookLM Prompts";
    btn.style.position = "fixed";
    btn.style.bottom = "16px";
    btn.style.right = "16px";
    btn.style.zIndex = "99999";
    btn.style.padding = "8px 12px";
    btn.style.borderRadius = "4px";
    btn.style.border = "none";
    btn.style.background = "#1a73e8";
    btn.style.color = "#fff";
    btn.style.fontSize = "12px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";

    btn.addEventListener("click", () => {
      panelVisible = !panelVisible;
      const panel = document.getElementById("nlm-prompts-panel");
      if (panel) {
        panel.style.display = panelVisible ? "flex" : "none";
      }
    });

    document.body.appendChild(btn);
  }

  function createPanel() {
    if (document.getElementById("nlm-prompts-panel")) return;

    const panel = document.createElement("div");
    panel.id = "nlm-prompts-panel";
    panel.style.position = "fixed";
    panel.style.top = "64px";
    panel.style.right = "16px";
    panel.style.bottom = "80px";
    panel.style.width = "360px";
    panel.style.zIndex = "99998";
    panel.style.background = "#ffffff";
    panel.style.border = "1px solid #dadce0";
    panel.style.borderRadius = "8px";
    panel.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    panel.style.display = "none";
    panel.style.flexDirection = "column";
    panel.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    panel.style.fontSize = "12px";
    panel.style.overflow = "hidden";

    const header = document.createElement("div");
    header.textContent = "NotebookLM Prompts (GitHub)";
    header.style.padding = "8px 12px";
    header.style.background = "#f1f3f4";
    header.style.borderBottom = "1px solid #dadce0";
    header.style.fontWeight = "600";

    const search = document.createElement("input");
    search.type = "text";
    search.placeholder = "Filter by name/category...";
    search.style.margin = "8px 12px";
    search.style.padding = "4px 8px";
    search.style.width = "calc(100% - 24px)";
    search.style.borderRadius = "4px";
    search.style.border = "1px solid #dadce0";
    search.style.fontSize = "12px";

    const listContainer = document.createElement("div");
    listContainer.id = "nlm-prompts-list";
    listContainer.style.flex = "1";
    listContainer.style.overflow = "auto";
    listContainer.style.padding = "0 8px 8px 8px";

    const footer = document.createElement("div");
    footer.style.padding = "4px 12px";
    footer.style.borderTop = "1px solid #dadce0";
    footer.style.fontSize = "11px";
    footer.style.color = "#666";
    footer.textContent = "Click a prompt to paste it into NotebookLM.";

    panel.appendChild(header);
    panel.appendChild(search);
    panel.appendChild(listContainer);
    panel.appendChild(footer);

    document.body.appendChild(panel);

    search.addEventListener("input", () => {
      renderPromptList(listContainer, search.value);
    });
  }

  function renderPromptList(container, filterText) {
    container.innerHTML = "";

    const filter = (filterText || "").toLowerCase();

    const items = promptsIndex
      .slice()
      .sort((a, b) => a.label.localeCompare(b.label))
      .filter((p) => p.label.toLowerCase().includes(filter) || p.id.toLowerCase().includes(filter));

    if (items.length === 0) {
      const empty = document.createElement("div");
      empty.textContent = "No prompts found.";
      empty.style.padding = "8px";
      container.appendChild(empty);
      return;
    }

    for (const p of items) {
      const row = document.createElement("div");
      row.style.padding = "6px 4px";
      row.style.borderBottom = "1px solid #f1f3f4";
      row.style.cursor = "pointer";
      row.style.display = "flex";
      row.style.flexDirection = "column";

      const title = document.createElement("div");
      title.textContent = p.fileName;
      title.style.fontWeight = "500";

      const meta = document.createElement("div");
      meta.textContent = p.category + " — " + p.id;
      meta.style.fontSize = "11px";
      meta.style.color = "#666";

      row.appendChild(title);
      row.appendChild(meta);

      row.addEventListener("click", async () => {
        try {
          row.style.background = "#e8f0fe";
          const rawUrl = RAW_BASE_URL + p.path;
          const md = await httpGet(rawUrl);
          const code = extractFirstCodeBlock(md);
          if (!code) {
            alert("NotebookLM Prompts: no code block found in this prompt file.");
          } else {
            pasteIntoInput(code);
          }
        } catch (err) {
          console.error(err);
          alert("NotebookLM Prompts: failed to load prompt from GitHub. See console for details.");
        } finally {
          row.style.background = "transparent";
        }
      });

      container.appendChild(row);
    }
  }

  // --- Init ---

  async function init() {
    createToggleButton();
    createPanel();

    try {
      await fetchPromptsIndex();
      const listContainer = document.getElementById("nlm-prompts-list");
      if (listContainer) {
        renderPromptList(listContainer, "");
      }
    } catch (err) {
      console.error("NotebookLM Prompts: failed to fetch prompts index:", err);
    }
  }

  // NotebookLM is a SPA, so we wait for body.
  function waitForBody() {
    if (document.body) {
      init();
    } else {
      setTimeout(waitForBody, 500);
    }
  }

  waitForBody();
})();

