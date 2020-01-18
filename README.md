# typedoc-plugin-pdf-export

With the help of this plugin you can automatically export a pdf of your typedoc documentation. The use case for this most likely wil be compliance reasons or requirements by a client.

## Installation

- `npm i ---save-dev typedoc-plugin-pdf-export`
- `yarn add -D typedoc-plugin-pdf-export`

After installation, typedoc will automatically inject this plugin (if none others are specified).

The generated pdf consists of:

- A table of contents divided by type, containing links to all definitions.
- A Legend of the different symbols used in the documentation
- All succesfully exported definitions that would appear in the default typedoc documentation.
