# Webview Starter

Webview Starter is a project template designed for use across all webview projects.

## Environments

This project includes three environments:

1. **Development**: For development, utilizing the dev server.
2. **Stage**: For testing, utilizing the stage server.
3. **Production**: For live deployment, utilizing the production server.

## TODO

Make sure to replace all TODO comments throughout the project with the appropriate code or comments.

## Translation

When adding translations, follow the concepts of categorization:

- For common words like "continue" and "buy," add them into the "common" category.
- For feature-specific translations, create specific objects.
- For error messages, refer to errors and input errors.

Transloco is used for translations. For more details, refer to the [Transloco documentation](https://jsverse.github.io/transloco/docs/translation-in-the-template).

## Icons

All manipulations with icons should be done using Icomoon. The guide on how to add icons to the current pack can be found [here](https://icomoon.io/docs).

## Layouts

This project includes three layout types: `MainLayout`, `MinimalLayout`, and `CustomLayout`. Each layout serves a distinct purpose and can be selected based on your project's requirements.

### MainLayout

- **Description**: The `MainLayout` features a header that includes both a title and a navigation link. It is designed as the default layout for the project and provides a solid foundation that can be customized as needed.
- **Features**:
  - Includes a header with a title and a navigation link.
  - Serves as a base layout that can be adapted to project-specific needs.

### MinimalLayout

- **Description**: The `MinimalLayout` features a header that contains only a header. This layout is intended to maintain a consistent appearance across all projects.
- **Features**:
  - Includes a header with just a title.
  - Ensures uniformity across different projects without additional navigational elements.

### CustomLayout

- **Description**: The `CustomLayout` is designed for scenarios that require a unique or highly customized layout.
- **Features**:
  - Allows for extensive customization and unique design implementations.

Choose the layout that best fits the needs of your project and modify it as necessary to achieve the desired look and functionality.

## Commit and Branch Convention

All commits should follow the rules of conventional commits. Branch naming should also adhere to the guidelines in the [documentation](https://ec.europa.eu/component-library/v1.15.0/eu/docs/conventions/git/).

If you encounter a "lint-staged" error, try manually running `npm run lint` to identify and fix the problem.

If you can't commit or create a branch, make sure you are following the conventional commit and branch naming strategy detailed in our Confluence.

## Feedback

For all feedback, contact [@MansurIsakov](https://telegram.me/mansurisakov) through Telegram.
