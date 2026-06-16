# References Folder

This folder is for storing **reference materials only** - it will NOT be part of your live website.

## Purpose

Use this folder to organize and store any materials that help you create, manage, and maintain your portfolio content. These files are for your reference and won't be deployed with your site.

## Recommended Structure

```
references/
├── design/                     # Design-related files
│   ├── wireframes/             # Wireframe files (Figma, Adobe XD, Sketch)
│   │   ├── homepage-wireframe.fig
│   │   └── project-page-wireframe.fig
│   ├── mockups/                # Visual design mockups
│   │   ├── desktop-mockup.png
│   │   └── mobile-mockup.png
│   ├── color-palettes/         # Color schemes and brand guidelines
│   │   ├── brand-colors.ase
│   │   └── color-palette.png
│   └── typography/             # Font choices and typography guidelines
│       ├── font-pairings.txt
│       └── typography-scale.png
│
├── documents/                  # Project and business documents
│   ├── project-briefs/         # Client briefs and project requirements
│   │   ├── client-a-brief.pdf
│   │   └── client-b-requirements.docx
│   ├── contracts/              # Contracts and agreements
│   │   ├── client-a-contract.pdf
│   │   └── nda-client-b.pdf
│   ├── proposals/              # Project proposals
│   │   └── client-a-proposal.pdf
│   └── notes/                  # Meeting notes and research
│       ├── client-a-meeting-notes.md
│       └── research-ideas.md
│
├── inspiration/                # Inspiration and reference materials
│   ├── websites/               # Screenshots of inspiring websites
│   │   ├── website-1.png
│   │   └── website-2.png
│   ├── portfolios/             # Other portfolios you admire
│   │   ├── portfolio-1.pdf
│   │   └── portfolio-2-urls.txt
│   ├── mood-boards/            # Mood boards for your portfolio design
│   │   ├── mood-board-1.jpg
│   │   └── mood-board-2.png
│   └── articles/               # Articles and tutorials you reference
│       ├── best-practices.md
│       └── seo-tips.md
│
├── assets/                     # Raw assets and source files
│   ├── raw/                    # Original source files
│   │   ├── logo.psd
│   │   ├── hero-image.ai
│   │   └── icons-sketch.sketch
│   ├── icons/                  # Icon sets and SVG files
│   │   ├── social-icons/
│   │   │   ├── github.svg
│   │   │   ├── linkedin.svg
│   │   │   └── twitter.svg
│   │   └── tech-icons/
│   │       ├── javascript.svg
│   │       ├── react.svg
│   │       └── typescript.svg
│   └── fonts/                  # Custom fonts
│       ├── custom-font.otf
│       └── custom-font.woff2
│
└── temp/                       # Temporary files (can be ignored)
    └── scratch-notes.md
```

## How to Use This Folder

### 1. Design Files
- Store your Figma, Adobe XD, or Sketch files here
- Keep wireframes and mockups organized by page or project
- Save color palettes and typography guidelines for consistency

### 2. Client Materials
- Save project briefs and requirements documents
- Store contracts and NDAs (keep these secure!)
- Organize meeting notes and research findings

### 3. Inspiration
- Collect screenshots of websites you like
- Save PDFs of portfolios that inspire you
- Create mood boards for your portfolio's visual direction
- Store articles and tutorials for reference

### 4. Raw Assets
- Keep original source files (PSD, AI, SKETCH, etc.)
- Store SVG icons and icon sets
- Save custom fonts and typography files

## Important Notes

1. **This folder is NOT deployed**: Anything in `references/` will not be part of your live website
2. **Keep it organized**: Use subfolders to categorize your materials
3. **Backup important files**: Consider backing up contracts and sensitive documents elsewhere
4. **Use descriptive names**: Name files clearly so you can find them later
5. **Clean up periodically**: Remove files you no longer need

## Example Workflow

1. **Starting a new project case study**:
   - Create a wireframe in Figma and save it to `references/design/wireframes/`
   - Save the client brief to `references/documents/project-briefs/`
   - Collect inspiration images in `references/inspiration/websites/`

2. **Updating your portfolio design**:
   - Create mood boards and save to `references/inspiration/mood-boards/`
   - Save color palettes to `references/design/color-palettes/`
   - Store typography choices in `references/design/typography/`

3. **Adding new skills**:
   - Research best practices and save notes to `references/inspiration/articles/`
   - Collect icon SVGs for tech stack in `references/assets/icons/tech-icons/`

## Tips

- **Use version control**: Commit changes to this folder along with your code
- **Add a README**: Create a `README.md` in subfolders to explain what's inside
- **Keep it clean**: Don't let this folder become a dumping ground
- **Sync across devices**: If you work on multiple computers, keep this folder in sync

## What NOT to Store Here

- **Node modules** (use `node_modules/`)
- **Build outputs** (use `.next/`)
- **Environment files** (use `.env`)
- **Large media files** that should be in `public/assets/`
- **Sensitive information** that shouldn't be in version control

---

This folder is your workspace for creating an amazing portfolio. Use it wisely!
