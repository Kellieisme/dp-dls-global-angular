# CodeQL Security Analysis Setup

This project uses GitHub's CodeQL for automated security vulnerability detection and code quality analysis.

## Prerequisites

⚠️ **Important**: GitHub Advanced Security must be enabled for this repository to use CodeQL code scanning.

### Enabling Advanced Security

**For Organization Owners/Admins:**
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Code security and analysis** in the left sidebar
4. Under **GitHub Advanced Security**, click **Enable**
5. Confirm by clicking **Enable GitHub Advanced Security for this repository**

**For Private Repositories:**
- Advanced Security is a paid feature for private repositories
- Contact your GitHub organization admin to enable it
- Public repositories have Advanced Security enabled by default

**Alternative for Public Repositories:**
- Make your repository public to use CodeQL without Advanced Security costs
- This automatically enables all security features

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

**Once Advanced Security is enabled:**
1. Go to the **Security** tab in your GitHub repository
2. Click on **Code scanning**
3. Review any alerts and their severity levels
4. Click on individual alerts for detailed information and remediation guidance

**Before Advanced Security is enabled:**
- The CodeQL workflow will run but results won't be displayed
- You'll see warnings in the workflow logs
- No security alerts will appear in the Security tab

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

### Advanced Security Not Enabled

**Error**: `Advanced Security must be enabled for this repository to use code scanning`

**Solutions**:
1. **Enable Advanced Security** (recommended):
   - Repository Settings → Code security and analysis → Enable GitHub Advanced Security
   - Requires organization owner/admin permissions
   - May incur costs for private repositories

2. **Make Repository Public** (if acceptable):
   - Repository Settings → General → Change repository visibility → Public
   - Automatically enables all security features for free

3. **Disable CodeQL Temporarily**:
   - Comment out or delete the `.github/workflows/codeql.yml` file
   - Re-enable once Advanced Security is available

### Permission Issues

**Error**: `CodeQL Action does not have permission to access Code Scanning API endpoints`

**Solutions**:
1. Verify the workflow has `security-events: write` permission (already configured)
2. Ensure Advanced Security is enabled (see above)
3. Check that the repository isn't a fork without proper permissions

### CLI Version Warnings

**Warning**: `Feature flags do not specify a default CLI version`

This is a harmless warning. The workflow will use the CLI version bundled with the action (currently 2.22.0).

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
