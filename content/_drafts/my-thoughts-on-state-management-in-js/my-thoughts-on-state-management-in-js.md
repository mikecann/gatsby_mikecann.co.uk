---
title: My Thoughts on State Management in JS
categories:
  - Markd
featuredImage: ./header.jpg
coverMeta: out
tags:
  - Typescript
  - Javascript
  - Web
date: 2020-16-03 08:51:40
---

I have been thinking a lot about state management lately and I have found myself going round in circles. So I thought I would but my musings down on paper so hopefully I can look back and refer to it next time.

<!-- more -->

# Scenario

Battletabs web extension
state was all inside hooks
having issues with spagetti and background pages dont need a view but was having to invoke view because of hooks
having to jump through hoops with hooks and useEffect, getting quite a bit of spagetti

rewrote it using redux and fpts after seeing this excellent code base: https://github.com/SamHH/bukubrow-webext
extensions have strange requirements with multiple pages that need to share state.
after doing rewrite discovered this library: https://github.com/tshaddix/webext-redux which might help for manifest <= v2
was running into issues with async code in thunks, was getting confusing and complicated.

rewrote it again using the library Effector (https://effector.now.sh/) which looks much simpler and cleaner than redux and handles async code more naturally.
it however too was having issues around circular store states, what is computed and what is not?

rewrote it again using rxjs and just putting the state in streams
is how it currently is but it isnt perfect

## Redux

Better fit for encapsulating the store
