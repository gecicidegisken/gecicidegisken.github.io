### Edit Homepage
Edit _data/menu.yml to add or remove items from the homepage.

### Edit Info
Edit _config.yml to change the site title, description, etc.

### Add new post
Add md file named  `YYYY-MM-DD-post_name` to `_posts/`

### Deal with categories
Add category to the post front matter
```
---
layout: post
category: category_name
---
```

The categories will appear in the top navbar, after home.
Create a new file named category_name.md in the root directory, and add the following content:
```
---
layout: archive
which_category: <category>
title: <category name>
---
```
An example of this is `/teknik.md`

### Run Locally

```bash
bundle exec jekyll serve
```