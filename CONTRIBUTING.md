## Contributing

We welcome contributions from the team to improve the **ProdOps AI** project. Please follow the guidelines below to ensure smooth collaboration and maintain consistency.

### Branching Strategy

- **Feature branches**: For new features or bug fixes, create a feature branch off of `dev`. Use a descriptive name for your feature branch, such as `feature/your-feature-name` or `bugfix/your-bug-name`.
- **Dev branch**: All work is first merged into the `dev` branch. This branch reflects the **Dev environment**.
- **Main branch**: After testing is completed in the **Dev environment**, changes are merged into the `main` branch, which reflects the **Prod environment**.

### Pull Requests

When contributing to the codebase, please follow the steps below:

1. **Create a feature branch**:
   - Make sure your branch name is descriptive of the work you are doing (e.g., `feature/add-login` or `bugfix/fix-api-auth`).
   
2. **Open a pull request** into the `dev` branch:
   - When your work is complete, push your feature branch to the repository and open a pull request into the `dev` branch.
   - Add a meaningful title and description to your pull request. 

3. **Make sure all tests pass**:
   - Before requesting a review, ensure that all tests pass in the CI pipeline and that there are no conflicts with the `dev` branch.

4. **Request a review**:
   - Assign the relevant team members as reviewers.
   - Address any feedback or requested changes promptly.

5. **Merge into `dev`**:
   - Once the pull request is approved and tests pass, merge it into the `dev` branch.
   - This will automatically deploy the changes to the **Dev environment**.

6. **Promote to `main` (Prod)**:
   - After testing and confirming that the changes work as expected in the **Dev environment**, open a pull request to merge `dev` into `main`.
   - This will trigger deployment to the **Prod environment**.

### Code Style

- **Consistency**: Follow the existing code style and structure.
- **Comments**: Document your code where necessary, especially for complex logic or functionality.
- **Formatting**: Ensure proper indentation and clean code formatting.

### Reporting Issues

If you find bugs or have feature requests, feel free to open an issue in the repository. Make sure to provide sufficient detail, including reproduction steps, expected behavior, and environment details.

### Additional Notes

- Ensure that your code is well-tested, and that it doesn't introduce any regressions.
- Follow the team’s communication guidelines for discussing new features or major changes before implementation.
