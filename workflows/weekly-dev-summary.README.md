# Weekly GitHub Development Summary

This export is an importable n8n workflow for the $200 bounty. It fetches the last seven days of commits, closed issues, and merged pull requests, asks Claude for a concise narrative, and posts the result to Slack.

## Configure in five steps

1. Import `weekly-dev-summary.json` into n8n.
2. In **Configuration**, replace `YOUR_GITHUB_OWNER` and `YOUR_GITHUB_REPO`.
3. Set `ANTHROPIC_API_KEY` and `SLACK_WEBHOOK_URL` in the n8n environment.
4. Execute once manually and verify the Slack output.
5. Activate the workflow after the manual run succeeds.

The GitHub requests use public endpoints. For private repositories, add a GitHub credential/header and keep the token in n8n credentials, never in the workflow export. The workflow sends only the generated digest to Slack.

## Cost and safety

The schedule is disabled on import. No paid Claude call occurs until the operator supplies `ANTHROPIC_API_KEY` and executes or activates the workflow. The workflow does not modify GitHub data.

## Local simulation

The workflow logic can be tested without a Claude key by replacing the Claude HTTP node with a Set node containing a fixture response. The expected boundary is: GitHub data is normalized into a prompt, the model response is formatted, and only the final text is delivered. A simulated run is not evidence of a real Claude/n8n execution; the bounty acceptance still requires a real n8n run screenshot.
