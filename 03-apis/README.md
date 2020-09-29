# Session 3 Notes

## Emoji Key for Video Tutorials, Readings, and more
* 🚨 Watch this video tutorial! (this is technical info needed for the examples). Of course if you alreaddy know this material, you can skip.
* 🔢 This is found in a group, maybe pick just one to check out!
* 🍿 Additional video if you have a particular interest and want to do a deeper dive.
* 📕 Required reading! Let's make sure we all have read this.
* 📚 Optional additional reading for a deeper dive.
* 💻 Code examples here!
* 🔗 Extra reference material / link

## NLP Libraries
* 🔗 [RiTa](https://rednoise.org/rita/), a software toolkit for computational literature created by Daniel Howe
  * 🚨 [RiTa Basics tutorial video](https://youtu.be/lIPEvh8HbGQ)
* 🔗 [Compromise](https://github.com/spencermountain/compromise), modest natural language processing by Spencer Kelly
* 💻 [p5.js Examples](https://editor.p5js.org/a2zitp/collections/oG3L-OLvGP)

## Data and APIs
* 📚 [2016 Notes and Examples](http://shiffman.net/a2z/data-apis/)
* 📚 [slides](https://docs.google.com/presentation/d/1n9q6QNhcp4yFuARKJKnjJWU4hmmtEuD9OUKjydadaEw/edit?usp=sharing)

### JSON
* 🔗 [Corpora maintained by tinysubversions](https://github.com/dariusk/corpora)
* 🔗 [loadJSON()](https://p5js.org/reference/#/p5/loadJSON)

### Dictionary / Lexicon / Word Finding APIs
* 🔗 [Data Muse](https://www.datamuse.com/api/)
* 🔗 [Wordnik](https://www.wordnik.com/)
* 🔗 [Wordnet](https://wordnet.princeton.edu/)

### JavaScript nuts and bolts
* 🚨 [fetch() video tutorial](https://youtu.be/tc8DU14qX6I?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
* 🚨 [async / await](https://youtu.be/XO77Fib9tSI)
* 🚨 [loading JSON from API](https://youtu.be/uxf0--uiX0I?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X) 
* 🍿 [What is JSON? Video 1](https://youtu.be/_NFkzw6oFtQ?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r), [What is JSON Video 2](https://youtu.be/118sDpLOClw?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)

### APIs
* 💻 [p5.js web editor code examples](https://editor.p5js.org/a2zitp/collections/cgfJWhpsE)
* 🔢 [2015 Wordnik Video Tutorial](https://youtu.be/YsgdUaOrFnQ), [wordnik docs](http://developer.wordnik.com/)
* 🔢 [2015 NY Times video tutorial](https://youtu.be/IMne3LY4bks), [nytimes docs](https://developer.nytimes.com/)
* 🍿 [2019 Working with Data and APIs video series](https://youtu.be/tc8DU14qX6I?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X) - 1: Client Side Basics

## Reading
* 📕 [Excavating AI: The Politics of Images in Machine Learning Training Sets](https://www.excavating.ai/) by Kate Crawford and Trevor Paglen
* 📚 [The Point of Collection](https://points.datasociety.net/the-point-of-collection-8ee44ad7c2fa#.y0xtfxi2p) by Mimi Onuoha (see: [Missing Datasets](https://github.com/MimiOnuoha/missing-datasets))
* 📚 [Introduction: Why Data Science Needs Feminism by Catherine D'Ignazio and Lauren Klein](https://data-feminism.mitpress.mit.edu/pub/frfa9szd/release/3)

## Assignment
1. Look through [Corpora](https://github.com/dariusk/corpora). This is a great repo to make your first open source contribution. An optional assignment for this week is to [follow these instructions](https://github.com/Open-Source-Studio-at-ITP/Syllabus/blob/source/data-assignment.md#instructions-for-corpora-contribution) from Open Source Studio and submit a pull request.

2. Use something "external" (in addition to p5.js) in a browser-based text experiment. You may use the p5 [loadJSON()](https://p5js.org/reference/#/p5/loadJSON) function featured in many of the video tutorials, but this is also an opportunity to explore the JavaScript [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with `await` and `async` as [found in these examples](https://editor.p5js.org/a2zitp/collections/cgfJWhpsE). See above for relevant vide tutorials. Here are some ideas:
    * Use [RiTa.js](https://github.com/dhowe/RiTaJS) or [Compromise](https://github.com/spencermountain/compromise) to analyze and/or modify text.
    * Load a JSON source from [Corpora](https://github.com/dariusk/corpora) or some other API (NY Times, Wikipedia, etc.)
    * Use [Wordnik](http://developer.wordnik.com/) to lookup meta-data about a word.
    * Try using an API that we have not explored in class or in the examples!
    * Collect data using a Google Form and load a CSV using `loadTable()` in p5. There are ways to connect to a Google Sheet directly using the google API and I am working on getting an example for you! For more see [#40](https://github.com/shiffman/A2Z-F20/issues/40).

3. Document your experience working with the library, API, or data source in a blog post and consider the following questions (stemming from the [Excavating AI](https://www.excavating.ai/) reading.
    * What is the origin of the data?
    * Who had the power to collect, label, and make available the data?
    * If you had to create a "data biography" (Thank you to Ellen Nickles for this term), what would you include? Have the maintainers of this dataset or API made this information easily available?
    * What potential harms could result from the collection, use (or misue) of the data, especially to marginalized communities?

## Add your assignment below via Pull Request
*(Please note you are welcome to post under a pseudonym and/or password protect your published assignment. Here is some [helpful information on privacy options for an NYU blog](https://nyu.service-now.com/sp?id=kb_article&sysparm_article=KB0012245&sys_kb_id=b2ddc9da004aa1002a5d036a271e5f70&spa=1). Finally, if you prefer not to post your assignment at all here, you may email the submission.)*
* Martin Martin -- [Working with JSON, RiTa, and Lincoln](https://www.martinsquared.com/2020/09/28/working-with-json-rita-and-lincoln/)
* Youming Zhang --[Joke Data](https://github.com/yzhang33/data_api/tree/master)
* Julie Lizardo --[Corpora + BodyPix](https://julielizardo.com/2020/09/28/corpora-bodypix/)
* Helen Zegarra --[Exploring APIs](https://texaotech.wordpress.com/2020/09/28/exploring-apis/)
* KJ Ha -- [Lyrics Replaced](https://www.kyungjooha.com/post/lyrics-replaced)
* Fanyi Pan -- [Word of The Day](https://fanyipan.wordpress.com/2020/09/29/wordnik/)
