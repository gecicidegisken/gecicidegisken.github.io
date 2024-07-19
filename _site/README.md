### Edit Homepage
Edit _data/menu.yml to add or remove items from the homepage.

### Edit Info
Edit _config.yml to change the site title, description, etc.

### Add new post
Add md file named  `YYYY-MM-DD-post_name` to `_posts/`
English posts should be in `_posts/en/` . Turkish posts are directly in `_posts/``

If title is not declared, the file name will be used as title. They can be different. I recommend path to be as simple as possible.

Add lang to front matter to specify the language of the post. It can be `en` or `tr` If not declared, it will be `tr` by default.

```---
layout: post
title: "Post Title"
lang: en || tr
---
```

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
lang: en || tr
---
```
An example of this is `/teknik.md`


### Deal with languages

For post language see: [Add new post](#add-new-post)

For a layout to be used in a specific language, add lang to the front matter of the layout file.
Layout files has conditions for en and tr. If lang is not declared, it will be tr by default.

### Run Locally

```bash
bundle exec jekyll serve
```