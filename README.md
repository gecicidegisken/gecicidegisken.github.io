### Edit Homepage
Edit _data/menu.yml to add or remove items from the homepage. Remember that there are two: `en/` and `tr/`

### Edit Info
Edit _config.yml to change the site title, description, etc.

### Add new post
Add md file named  `YYYY-MM-DD-post_name` to `_posts/`
English posts should be in `_posts/en/` . Turkish posts are directly in `_posts/`

If title is not declared, the file name will be used as title. They can be different. I recommend path to be as simple as possible. It is directly shown in the URL.

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
An example of this is `/teknik.md`. If I add a post with `category: teknik`, it will be shown in the archive page of teknik.md. And "teknik" will be shown in the top navbar.


### Deal with languages

For post language see: [Add new post](#add-new-post)

For a layout to be used in a specific language, add lang to the front matter of the layout file.
Layout files has conditions for en and tr. If lang is not declared, it will be tr by default.

### Run & Develop Locally

```bash
bundle exec jekyll serve
```

### Publish
Just push to the master branch. The site will be automatically built and published to GitHub Pages.


### Thanks
Thanks to [@riggraz](https://github.com/riggraz) for the base template [no-style-please](https://github.com/riggraz/no-style-please)


### More
- `sibervepunk/notes` is a different project & different repo with its own configuration. 
see: https://github.com/gecicidegisken/notes