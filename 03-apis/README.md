# Session 2 Notes

## NLP Libraries
* [RiTa](https://rednoise.org/rita/), a software toolkit for computational literature created by Daniel Howe
  * [RiTa Basics tutorial video](https://youtu.be/lIPEvh8HbGQ)
* [Compromise](https://github.com/spencermountain/compromise), modest natural language processing by Spencer Kelly
* [p5.js Examples](https://editor.p5js.org/a2zitp/collections/oG3L-OLvGP)

## Data and APIs
* [2016 Notes and Examples](http://shiffman.net/a2z/data-apis/)
* [slides](https://docs.google.com/presentation/d/1n9q6QNhcp4yFuARKJKnjJWU4hmmtEuD9OUKjydadaEw/edit?usp=sharing)

### JSON
* [Corpora maintained by tinysubversions](https://github.com/dariusk/corpora)
* [loadJSON()](https://p5js.org/reference/#/p5/loadJSON)

### APIs
* [p5.js web editor code examples](https://editor.p5js.org/a2zitp/collections/cgfJWhpsE)
* [2015 Wordnik Video Tutorial](https://youtu.be/YsgdUaOrFnQ), [wordnik docs](http://developer.wordnik.com/)
* [2015 NY Times video tutorial](https://youtu.be/IMne3LY4bks), [nytimes docs](https://developer.nytimes.com/)
* [2019 Working with Data and APIs video series](https://youtu.be/tc8DU14qX6I?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X) - 1: Client Side Basics
* [What is JSON? Video 1](https://youtu.be/_NFkzw6oFtQ?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r), [What is JSON Video 2](https://youtu.be/118sDpLOClw?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)

### Google Sheets
* Working with google sheets: [tabletop.js](https://github.com/jsoma/tabletop)
* [p5.js Mad Libs generator video tutorial]((https://thecodingtrain.com/CodingChallenges/039-madlibs.html)!)

## Reading
* [Excavating AI: The Politics of Images in Machine Learning Training Sets](https://www.excavating.ai/) by Kate Crawford and Trevor Paglen
* [The Point of Collection](https://points.datasociety.net/the-point-of-collection-8ee44ad7c2fa#.y0xtfxi2p) by Mimi Onuoha (see: [Missing Datasets](https://github.com/MimiOnuoha/missing-datasets))
* [Introduction: Why Data Science Needs Feminism by Catherine D'Ignazio and Lauren Klein](https://data-feminism.mitpress.mit.edu/pub/frfa9szd/release/3)

## Assignment
1. Look through [Corpora](https://github.com/dariusk/corpora). This is a great repo to make your first open source contribution. An optional assignment for this week is to [follow these instructions](https://github.com/Open-Source-Studio-at-ITP/Syllabus/blob/source/data-assignment.md) from Open Source Studio and submit a pull request.

2. Use something "external" (in addition to p5.js) in a browser-based text experiment. Some ideas:
    * Use [RiTa.js](https://github.com/dhowe/RiTaJS) or [Compromise](https://github.com/spencermountain/compromise) to analyze and/or modify text.
    * Use a data source from [Corpora](https://github.com/dariusk/corpora) or some other API (NY Times, Wikipedia, etc.)
    * Use [Wordnik](http://developer.wordnik.com/) to lookup meta-data about a word.
    * Try using an API that we have not explored in class or in the examples!
    * Collect data using a Google Form and load a CSV using `loadTable()` in p5 or connect to the Google Sheet directly with [tabletop.js](https://github.com/jsoma/tabletop). You can also use this incredibly convenient service [Sheetsu](https://sheetsu.com/), but it is not free / open source.

I encourage you to think of creative interactions other than "submit text via a text box."  For example, what happens if you alter a user's text as they type?  What if you make DOM elements `contenteditable`?  What other experimental interactions can you invent?