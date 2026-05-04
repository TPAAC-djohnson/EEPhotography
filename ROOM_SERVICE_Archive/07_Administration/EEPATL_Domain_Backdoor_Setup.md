# eepatl.com Domain Shortcut Setup for ROOM SERVICE

## Goal

Create a clean public shortcut from eepatl.com to the ROOM SERVICE portfolio site.

Recommended paths:

- https://eepatl.com/roomservice
- https://eepatl.com/room-service
- https://eepatl.com/fifty-shades-of-black

## Current GitHub Pages Site

https://tpaac-djohnson.github.io/EEPhotography/ROOM_SERVICE_Archive/site/

## Option 1 — Simple Redirect Page

Create a page on eepatl.com titled:

ROOM SERVICE

Set the page URL slug to:

/roomservice

Then add a redirect button or automatic redirect to:

https://tpaac-djohnson.github.io/EEPhotography/ROOM_SERVICE_Archive/site/

## Option 2 — HTML Redirect

If eepatl.com allows custom HTML, add this to a blank page:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=https://tpaac-djohnson.github.io/EEPhotography/ROOM_SERVICE_Archive/site/">
  <title>ROOM SERVICE</title>
  <link rel="canonical" href="https://tpaac-djohnson.github.io/EEPhotography/ROOM_SERVICE_Archive/site/">
</head>
<body>
  <p>Redirecting to ROOM SERVICE...</p>
  <p><a href="https://tpaac-djohnson.github.io/EEPhotography/ROOM_SERVICE_Archive/site/">Click here if you are not redirected.</a></p>
</body>
</html>
```

## Option 3 — Domain-Level Redirect

In the eepatl.com hosting dashboard, create a URL redirect:

Source path:

/roomservice

Destination:

https://tpaac-djohnson.github.io/EEPhotography/ROOM_SERVICE_Archive/site/

Redirect type:

301 permanent or 302 temporary.

Use 302 if the ROOM SERVICE site may move later.
Use 301 if the GitHub Pages link is permanent.

## Option 4 — Subdomain

Create:

roomservice.eepatl.com

Point it to GitHub Pages later if a custom domain is configured.

This requires DNS configuration and a CNAME file in the GitHub repo.

## Recommendation

Use /roomservice first. It is cleaner, faster, and safer than changing DNS immediately.

Public sharing link:

https://eepatl.com/roomservice
