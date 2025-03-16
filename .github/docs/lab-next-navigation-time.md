# Lab: Next.js Navigation Time

## Introduction

This lab is to test the performance of Next.js navigation in local or client-side.

The test should be simple, the UI will be:

- left side we have a sidebar with a list of links
- right side we have a main content area

```
---------------------------------
|  ---   -----------------      |
|  ---   -----------------      |
|  ---   -----------------      |
|  ---   -----------------      |
|  ---   -----------------      |
|  ---   -----------------      |
---------------------------------
```

When we click on a link in the sidebar, the main content area will show the content of the link.

The test will be the navigation time from the link click to the main content area showing the content.

The test should be automated, and the result should be recorded and plotted in a chart.

If we can achieve p90 of <17ms, and optionally p95 of <50ms, we can consider the test as perfectly successful. If the result is not good enough, we might consider abandon the project.
