#!/bin/bash
# =============================================================
# VERIDIAN Website — Autonomous Build Runner
# Run inside tmux so it survives SSH disconnect
# =============================================================

set -euo pipefail

PROJECT_DIR="/home/ubuntu/nanotech-biomems-website"
LOG_FILE="$PROJECT_DIR/build_session.log"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

cd "$PROJECT_DIR"

echo "=== VERIDIAN Autonomous Build Session ===" | tee "$LOG_FILE"
echo "Started: $(date)" | tee -a "$LOG_FILE"
echo "Project: $PROJECT_DIR" | tee -a "$LOG_FILE"
echo "===========================================" | tee -a "$LOG_FILE"

# Commit the updated CLAUDE.md first
git add -A && git commit -m "Update CLAUDE.md: premium quality gate, self-grading, fabrication section requirements" && git push || true

# Launch Claude Code in dangerously-skip-permissions mode with the full prompt
claude \
  --dangerously-skip-permissions \
  --model claude-sonnet-4-6 \
  --print \
  --max-turns 200 \
  --verbose \
  "Read CLAUDE.md carefully — it contains your full instructions. You are rebuilding the VERIDIAN website to be a premium, state-of-the-art scientific breakthrough showcase.

KEY RULES:
1. Read CLAUDE.md completely before starting ANY work
2. Follow the Quality Gate protocol — screenshot, grade, compare to previous, only commit+push if the score improves
3. Keep iteration_log.md updated with every attempt
4. Push to GitHub on every successful quality gate pass
5. If a change makes things worse, revert and try differently
6. The existing website code is in website/ — build on it, improve it, add the new sections
7. Use the Puppeteer screenshot.js for visual feedback
8. Keep going until every section scores >= 8/10

Start by reading CLAUDE.md, product_brief.md, and the existing components. Then begin the rebuild section by section, following the quality gate for each." \
  2>&1 | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo "=== Session Complete: $(date) ===" | tee -a "$LOG_FILE"
