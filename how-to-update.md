*Last updated: March 14 2026*

# How to update your Treaty Education website

This guide explains how to make simple text changes to your website using GitHub's web interface - no special software needed.

---

## 1. Log in to GitHub

- Go to [github.com](https://github.com) and sign in with your username and password.

---

## 2. Go to your website repository

- Once logged in, click your profile icon (top right) and select **Your repositories**.
- Find and click the repository named **`treaty-education-nz`** (or whatever you called it).

You'll see a list of files and folders that make up your website.

---

## 3. Find the page you want to edit

- The main pages are inside the **`pages`** folder.  
  Click on `pages` to open it, then click on the file you want, for example:
    - `workshops.html`
    - `resources.html`
    - `testimonials.html`
    - `contact.html`

- The homepage is called **`index.html`** and is located in the main (root) folder.  
  To go back to the main folder, click the repository name at the top.

---

## 4. Start editing

- Once you're viewing the file, look for a small pencil icon near the top right (just above the file content).  
  Click it to enter edit mode.

---

## 5. Make your changes

The file contains **HTML code**, but you only need to change the **text between tags**.

- For example, to change a paragraph, find it inside `<p> ... </p>` and edit the words in between.
- To change a heading, look for `<h1>`, `<h2>`, etc., and edit the text inside.
- **Do not change anything inside angle brackets** (`<` and `>`) - those are instructions for the browser.

> If you're ever unsure, just change the visible words and leave everything else as is.

---

## 6. Preview your changes

- After editing, scroll down and click the **Preview** tab to see how the page will look.
- If something looks wrong, go back to the **Edit file** tab and fix it.

---

## 7. Save (commit) your changes

- Scroll down to the **"Commit changes"** section.
- Write a short description of what you changed, e.g. *“Updated workshop description”*.
- Leave the radio button on **Commit directly to the main branch**.
- Click the green **Commit changes** button.

---

## 8. Wait for the site to update

- GitHub automatically rebuilds your site after every change.  
  It usually takes less than a minute.
- Visit your website (e.g. `https://yourusername.github.io/treaty-education-nz`) to see the update.

---

## Updating images (optional)

1. Go to the **`images`** folder in your repository.
2. Click **Add file** → **Upload files**.
3. Drag your new image into the box, or click to choose it.
4. Scroll down and commit the upload (same as step 7).
5. To use the new image on a page, edit the HTML file and find where the image is referenced.  
   The line will look something like:  
   `<img src="../images/old-image.jpg" ...>`  
   Change the filename to your new image's name.

---

## Need help?

If you're unsure about any step, or if you'd like me to make the changes for you, just email me and I'll be happy to do it.

---