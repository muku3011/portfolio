"use strict";

//Enable tooltips everywhere
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */
const rss = new RSS(
    document.querySelector("#rss-feeds"),
    //Change this to your own rss feeds
    "https://www.gsma.com/newsroom/category/press-release/feed/",
    {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,


        // will request the API via https
        // default: false
        // valid values: false, true
        ssl: true,

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',

    }
);
rss.render().then(r => r);


/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
new GitHubCalendar("#github-graph", "muku3011", {responsive: true});


/* GitHub Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({username: "muku3011", selector: "#ghfeed"});
