# Intro

Today, we take on a new President for the United States, and one of the main conversations is around the transition of Obama's whitehouse.gov to Trumps whitehouse.gov.

My goal is to utilize Archiving resources to see the differences happening on the site, in a visual way.

## Process
To do this, My first step was to review the Wayback Machine. Archive.org's Wayback Machine has a slew of snapshots of sites, and for whitehouse.gov there are THOUSANDS!


I thought, if I could scrape an earlier version, (say from jan 18th) and today's version, I could compare them in a .git fashion to eachother.

I found a resource to pull down the site snapshots called [Wayback Machine Downloader](https://github.com/hartator/wayback-machine-downloader)

I was referred to this [archive of Obama's site](https://obamawhitehouse.archives.gov/)


But I still wondered, HOW can I see these two sites side-by-side?? Surely I've seen sites like this before, where even the scrolling function was synced.

this led me to an [old conversation on stack overflow](https://stackoverflow.com/questions/17624435/how-can-i-open-multiple-websites-in-the-same-window-same-tab-in-batch) about using `Framesets`. To my surprise IT WORKED! i had both sides loading!!

```
<html>
  <FRAMESET cols="50%,50%">
    <FRAME src="https://web.archive.org/web/20170119230156/http://whitehouse.gov">
    <FRAME src="https://web.archive.org/web/20170120205436/http://whitehouse.gov">
  </FRAMESET>
</html>
```

BUT then I learned how out of date this was.. the Frameset element has been deprecated, but the [iframe element](https://www.w3.org/TR/html5/embedded-content-0.html#the-iframe-element) can still work. [reference](https://stackoverflow.com/a/31845361/6041076)

So Where I am at this moment is a page with two iframes that are pulling the two archived URLs to the page.

### Status
What I'd like to do from here is

- [ ] **Address Cross-Origin Errors** I know that I'm getting Cross-Origin errors, and thanks to [this explanation of Cross-Origin](https://javascript.info/tutorial/same-origin-security-policy) and [this one](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) have a better Idea of what's going on, and hope to fix that next.

- [ ] **Add Sync'ed Scroll** I'd like to be able to sync the iframe's scroll

- [ ] **Add Sync'ed click-throughs** I'd like to be able to load the same page if a link is clicked

- [ ] **Add Summary of Changes** I'd like to summarize the changes at the bottom of the page

- [ ] **Handle 404's and redirects** I'd like to visibly show the removal of a page, based on it's code status, to further communicate the change has been made


### Want To Help?

AWESOME! I'd love the help! You can ping me via twitter at [@KaraAJC](https://www.twitter.com/KaraAJC) And I'm looking specifically for:
- Pairing
- Learning Together (or like tutor/mentor)
- Resource Sharing

### Resources & Links

I'm going to store links to stories related to comparing the sites along with examples of other folk's doing this work

- [Buzzfeed says calm down about pages "Disappearing" ](https://www.buzzfeed.com/chrisgeidner/lets-calm-down-about-pages-disappearing-from-the-white-house?utm_term=.ee2o2E9JW#.hw5ANb214)
-
