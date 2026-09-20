// Offline acceptance-boundary simulation. It never calls GitHub, Claude, Slack, or n8n.
const fixture = {
  commits: [
    { sha: "abc1234", message: "Add weekly digest workflow", author: "cekuu35" },
    { sha: "def5678", message: "Fix empty issue handling", author: "cekuu35" }
  ],
  closedIssues: [{ number: 12, title: "Handle empty repositories", url: "https://github.com/example/repo/issues/12" }],
  mergedPRs: [{ number: 18, title: "Add digest formatting", url: "https://github.com/example/repo/pull/18" }]
};

const prompt = [
  "Write a concise weekly development summary in EN.",
  "Use only the supplied facts. Include highlights, shipped changes, closed issues, merged PRs, risks, and next-week suggestions.",
  JSON.stringify(fixture, null, 2)
].join("\n\n");

const mockClaudeResponse = {
  content: [{ type: "text", text: "## Weekly summary\n\n- Added the weekly digest workflow.\n- Fixed empty issue handling.\n- Closed #12 and merged PR #18.\n\nNo additional risks were recorded in the supplied facts." }]
};

const digest = mockClaudeResponse.content[0].text;
console.log(JSON.stringify({
  mode: "offline-simulation",
  outboundCalls: 0,
  promptChars: prompt.length,
  digest,
  realRunRequired: true
}, null, 2));
