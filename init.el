(setq org-publish-project-alist
  '(("public-prometheansacrifice.github.io-org"
     :base-directory "~/development/prometheansacrifice/prometheansacrifice.github.io/"
     :publishing-directory  "~/development/prometheansacrifice/prometheansacrifice.github.io/"
     :recursive t
     :publishing-function org-html-publish-to-html)
    ("public-prometheansacrifice.github.io-rss"
     :base-directory "~/development/prometheansacrifice/prometheansacrifice.github.io/"
     :publishing-directory  "~/development/prometheansacrifice/prometheansacrifice.github.io/"
     :recursive t
     :html-link-home "https://prometheansacrifice.sh/"
     :html-link-use-abs-url t
     :publishing-function org-rss-publish-to-rss)))
