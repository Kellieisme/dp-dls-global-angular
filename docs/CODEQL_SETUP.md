# CodeQL Security Analysis Setup

This project uses GitHub's CodeQL for automated security vulnerability detection and code quality analysis.

## What is CodeQL?

CodeQL is GitHub's semantic code analysis engine that helps identify:
- Security vulnerabilities (SQL injection, XSS, etc.)
- Code quality issues
- Common programming errors
- Compliance violations

## How it works

### Automated Scans

CodeQL runs automatically on:
- **Push events** to `main`, `develop`, and `angular-*` branches
- **Pull requests** targeting these branches
- **Weekly schedule** (Mondays at 6:00 AM UTC)

### Analysis Configuration

The CodeQL analysis is configured via `.github/codeql/codeql-config.yml` and includes:

- **Languages analyzed**: JavaScript/TypeScript
- **Query suites**: `security-and-quality` and `security-extended`
- **Included paths**: `projects/`, `src/`
- **Excluded paths**: 
  - Test files (`*.spec.ts`, `*.test.ts`)
  - Stories (`*.stories.ts`)
  - Configuration files
  - Build artifacts (`dist/`, `node_modules/`, `coverage/`)

### Viewing Results

1. Go to the **Security** tab in your GitHub repository
2. Click on **Code scanning**
3. Review any alerts and their severity levels
4. Click on individual alerts for detailed information and remediation guidance

### Custom Queries

You can add custom CodeQL queries by:
1. Creating `.ql` files in `.github/codeql/queries/`
2. Adding them to the configuration file
3. Committing the changes

### Suppressing False Positives

If CodeQL reports a false positive:
1. Add a comment above the line: `// codeql[rule-id] This is a false positive because...`
2. Or use the GitHub UI to dismiss the alert with a reason

### Local Development

To run CodeQL locally:
```bash
# Install CodeQL CLI
npm install -g @github/codeql

# Create database
codeql database create --language=javascript ./codeql-db --source-root=.

# Run analysis
codeql database analyze ./codeql-db --format=sarif-latest --output=results.sarif
```

## Security Best Practices

- Review all CodeQL alerts promptly
- Don't dismiss alerts without understanding them
- Use the "Won't fix" dismissal reason only for accepted risks
- Keep dependencies updated to avoid known vulnerabilities
- Follow secure coding practices highlighted by CodeQL

## Troubleshooting

### Build Failures
If the CodeQL workflow fails during the build step:
- Check that all dependencies are correctly specified
- Ensure the build commands work locally
- Review the workflow logs for specific error messages

### Missing Alerts
If you expect CodeQL to catch something but it doesn't:
- Check that the file is not in the excluded paths
- Verify the query suites include the relevant rules
- Consider adding custom queries for specific patterns

### Performance Issues
If CodeQL takes too long:
- Review the included/excluded paths
- Consider splitting large codebases into multiple analyses
- Optimize the build process to reduce compilation time
