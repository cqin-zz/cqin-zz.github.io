# GitHub Personal Page

A minimalist personal website built with Jekyll and GitHub Pages.

## Reference Links
- See quick instruction: [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)
- See more personal website templates: [personal-website](https://github.com/topics/personal-website)

## Features

- Clean, responsive design
- About page
- Projects showcase
- Notes/Blog section
- Image gallery with Thickbox support
- Pagination for posts
- Mobile-friendly layout

## Local Development

### Requirements

- [Jekyll](https://jekyllrb.com/docs/installation/)
- [Ruby (version 2.5.0 or higher)](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)
- [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/)

### Quick Start

1. Clone the repository
```bash
git clone https://github.com/yourusername/cqin-zz.github.io.git
cd cqin-zz.github.io
```

2. Install dependencies
```bash
bundle install
```

3. Run the site locally
```bash
bundle exec jekyll serve
```

4. View the site at `http://localhost:4000`

## Directory Structure

```
.
├── _includes/       # Header, footer, and other reusable components
├── _layouts/        # Page templates
├── _posts/         # Blog posts
├── assets/         # CSS, JavaScript, images
├── about.md        # About page
├── projects.md     # Projects page
├── notes.md        # Notes/Blog page
└── index.html      # Homepage
```

## Customization

1. Edit `_config.yml` to update site settings
2. Modify content in markdown files
3. Add posts to `_posts` directory
4. Update styles in `assets/css`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

This project is open source that is available for individual use.

---
<div align="center">
    
![pages-build-deployment](https://github.com/cqin-zz/cqin-zz.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)
</div>
