# Preview website:
<!--
[https://www.alaoweb.org/2021-preview](https://www.alaoweb.org/2021-preview)
-->

# 2021.alaoweb.org
#### PRODUCTION
GitHub Pages build from `main` branch: [https://2021.alaoweb.org](https://2021.alaoweb.org)

#### ACCESSIBILITY DASHBOARD:
http://pa11y.alaoweb.org/
<!-->
#### STAGING
Netlify build from `staging` branch: [https://2020-staging.alaoweb.org](https://2020-staging.alaoweb.org)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bcb0bf6-d7dc-433c-afff-69ba64964e69/deploy-status)](https://app.netlify.com/sites/alao/deploys)
-->

## Intro

This site was developed by the ALAO 2020 Virtual Conference Website Team based on a design by the [Project Zeppelin / GDG DevFest](https://github.com/gdg-x/zeppelin). A great deal of conference and organizational info can be found on the [ALAO Website](https://www.alaoweb.org). This site should serve as a gateway to the various sources of ALAO information while providing visitors with a user-friendly way to find conference-specific info.

This site was designed with future users in mind, so the group chose platforms that would be accessible to a wide range of users: [Jekyll](https://jekyllrb.com) and [GitHub Pages](https://pages.github.com).

## About Jekyll

[Jekyll](https://jekyllrb.com) is a Ruby gem that generates static websites from markdown, HTML, and other formats. See the [official Jekyll documentation](https://jekyllrb.com/docs/home/) for details.

## Resources

More details are available in the [GitHub wiki](https://github.com/alaoweb/2020.alaoweb.org/wiki).

## Contributing

Pre-Requisite:

- A Package Manager: [Homebrew](https://brew.sh/) or [Chocolatey](https://chocolatey.org/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Jekyll](https://jekyllrb.com/docs/installation/)

The following example uses "issue#3" as a subject. That's the branch name and is used in the commit message.

### Setup

1. `git clone` the [repo](https://github.com/alaoweb/2020.alaoweb.org.git) from GitHub
2. cd to repo root and `git pull`
3. `bundle install`
4. Continue with step 3 below

### Contributing

1. Make sure you're on the main branch

- `git checkout main`

2. Make sure your main branch is up to date

- `git pull origin main`

3. Start up jekyll

- `bundle exec jekyll serve`
- open [http://localhost:4000](http://localhost:4000) in your browser

4. Create a new branch for your changes

- `git checkout -b issue#3`

5. Make changes, check [http://localhost:4000](http://localhost:4000) to see your changes live

- We strongly recommend performing an accessibility audit (e.g. [with Chrome](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)) if you've made structural or stylistic changes (not adding text content or additional posts)

6. Add your changed files

- `git add {changed-files}`

7. Commit your changes with a fancy message

- `git commit -m "fixes issue #3"`

8. Add your branch to the repo

- `git push --set-upstream origin issue#3`

9. Switch back to the main branch

- `git checkout main`

10. Go to https://github.com/alaoweb/2020.alaoweb.org
11. Make a pull request base:main and compare:issue-3
12. Wait for someone to test your changes and merge the pull request
13. Do the dance of joy 🎉

### Managing Pull Requests

1. Follow steps 1 - 3 above
2. Get any remote branches

- `git fetch`

3. Switch to the branch in question

- `git checkout BRANCHNAME`

4. `bundle exec jekyll serve`
5. Check [http://localhost:4000](http://localhost:4000) that nothing is broken
6. Merge that branch into main (easiest to manage on the GitHub site)
