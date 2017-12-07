const crypto = require("crypto");

const secret = 'QWERASDF'

function sign(data) {
  data = JSON.stringify(data)
  return (
    "sha1=" +
    crypto
      .createHmac("sha1", secret)
      .update(data,'utf-8')
      .digest("hex")
  );
}

const result= sign({
  action: "started",
  repository: {
    id: 98527092,
    name: "lord",
    full_name: "landn172/lord",
    owner: {
      login: "landn172",
      id: 4362412,
      avatar_url: "https://avatars3.githubusercontent.com/u/4362412?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/landn172",
      html_url: "https://github.com/landn172",
      followers_url: "https://api.github.com/users/landn172/followers",
      following_url:
        "https://api.github.com/users/landn172/following{/other_user}",
      gists_url: "https://api.github.com/users/landn172/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/landn172/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/landn172/subscriptions",
      organizations_url: "https://api.github.com/users/landn172/orgs",
      repos_url: "https://api.github.com/users/landn172/repos",
      events_url: "https://api.github.com/users/landn172/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/landn172/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/landn172/lord",
    description: "https//lord.space",
    fork: false,
    url: "https://api.github.com/repos/landn172/lord",
    forks_url: "https://api.github.com/repos/landn172/lord/forks",
    keys_url: "https://api.github.com/repos/landn172/lord/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/landn172/lord/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/landn172/lord/teams",
    hooks_url: "https://api.github.com/repos/landn172/lord/hooks",
    issue_events_url:
      "https://api.github.com/repos/landn172/lord/issues/events{/number}",
    events_url: "https://api.github.com/repos/landn172/lord/events",
    assignees_url:
      "https://api.github.com/repos/landn172/lord/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/landn172/lord/branches{/branch}",
    tags_url: "https://api.github.com/repos/landn172/lord/tags",
    blobs_url: "https://api.github.com/repos/landn172/lord/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/landn172/lord/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/landn172/lord/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/landn172/lord/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/landn172/lord/statuses/{sha}",
    languages_url: "https://api.github.com/repos/landn172/lord/languages",
    stargazers_url: "https://api.github.com/repos/landn172/lord/stargazers",
    contributors_url: "https://api.github.com/repos/landn172/lord/contributors",
    subscribers_url: "https://api.github.com/repos/landn172/lord/subscribers",
    subscription_url: "https://api.github.com/repos/landn172/lord/subscription",
    commits_url: "https://api.github.com/repos/landn172/lord/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/landn172/lord/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/landn172/lord/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/landn172/lord/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/landn172/lord/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/landn172/lord/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/landn172/lord/merges",
    archive_url:
      "https://api.github.com/repos/landn172/lord/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/landn172/lord/downloads",
    issues_url: "https://api.github.com/repos/landn172/lord/issues{/number}",
    pulls_url: "https://api.github.com/repos/landn172/lord/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/landn172/lord/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/landn172/lord/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/landn172/lord/labels{/name}",
    releases_url: "https://api.github.com/repos/landn172/lord/releases{/id}",
    deployments_url: "https://api.github.com/repos/landn172/lord/deployments",
    created_at: "2017-07-27T11:14:19Z",
    updated_at: "2017-12-07T11:34:49Z",
    pushed_at: "2017-12-07T10:12:59Z",
    git_url: "git://github.com/landn172/lord.git",
    ssh_url: "git@github.com:landn172/lord.git",
    clone_url: "https://github.com/landn172/lord.git",
    svn_url: "https://github.com/landn172/lord",
    homepage: null,
    size: 1589,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit"
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  sender: {
    login: "landn172",
    id: 4362412,
    avatar_url: "https://avatars3.githubusercontent.com/u/4362412?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/landn172",
    html_url: "https://github.com/landn172",
    followers_url: "https://api.github.com/users/landn172/followers",
    following_url:
      "https://api.github.com/users/landn172/following{/other_user}",
    gists_url: "https://api.github.com/users/landn172/gists{/gist_id}",
    starred_url: "https://api.github.com/users/landn172/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/landn172/subscriptions",
    organizations_url: "https://api.github.com/users/landn172/orgs",
    repos_url: "https://api.github.com/users/landn172/repos",
    events_url: "https://api.github.com/users/landn172/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/landn172/received_events",
    type: "User",
    site_admin: false
  }
});


console.log(result)

