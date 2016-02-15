---
layout: docs
title: Typography
permalink: /docs/typography/
---

<section id="headings">
    <div class="info column-1-2 column-small-1">
        <h2>Headings</h2>
        <p>In fort you can use both <code>h1 h2 h3 h4 h5 h6</code> heading tags as well as <code>.h1 .h2 .h3 .h4 .h5</code> heading classes to style headings. The classes can be applied to other elements such as a <code>&lt;span&gt;</code> or to overwride a heading tags style.</p>
        <h1>h1 Title <small>h1 Small</small></h1>
        <h2>h2 Title <small>h2 Small</small></h2>
        <h3>h3 Title <small>h3 Small</small></h3>
        <h4>h4 Title <small>h4 Small</small></h4>
        <h5>h5 Title <small>h5 Small</small></h5>
        <span class="h6">h6 Title <small>h6 Small</small></span>
        <h1 class="h5">h1 Title <small>h1 Small</small></h1>

    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<h1> ... <small> ... </small></h1>
<h2> ... <small> ... </small></h2>
<h3> ... <small> ... </small></h3>
<h4> ... <small> ... </small></h4>
<h5> ... <small> ... </small></h5>

<span class="h6"> ... <small> ... </small></span>

<h1 class="h5"> ... <small> ... </small></h1>
{% endhighlight %}
    </div>
</section>

