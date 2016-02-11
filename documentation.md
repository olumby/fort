---
layout: docs
title: Documentation
permalink: /docs/
---

<section class="" id="getting-started">
    <div class="info column-1-2 column-small-1">
        <h2>Getting Started</h2>
        <p>If you are using the precompiled version of fort, download it and reference it in the head of your HTML.</p>
        <p>If you are using the SCSS version of fort, download it, move the whole folder into your project and import it into your SCSS file.</p>

        <h3>Customisation</h3>
        <p>Nearly every setting in fort is set using variables, these can all be overwridden by setting them before you import fort into your SCSS file.</p>
        <p>There are a set of default values, for example <code>$button-height</code> is set in <code>elements/_button.scss</code> this references the base height of all buttons (xl,l,m,s,xs), however each button also has its own variable for example <code>$button-xsmall-height</code></p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
    <link rel="stylesheet" href="path/to/fort.min.css">
{% endhighlight %}
{% highlight scss %}
    @import "/path/to/fort";
{% endhighlight %}
    </div>
</section>
<section class="" id="customisation">
    <div class="info column-1-2 column-small-1">
        <h3>Customisation</h3>
        <p>Nearly every setting in fort is set using variables, these can all be overwridden by setting them before you import fort into your SCSS file.</p>
        <p>There are a set of default values, for example <code>$button-height</code> is set in <code>elements/_button.scss</code> which sets the base height for all buttons (xl,l,m,s,xs). You can then further customise by setting custom heights for each button size, using for example <code>$button-xsmall-height</code></p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight scss %}
// Define variables
$button-height: 2rem;
$button-xsmall-height: 1.9rem;

// Import Fort
@import "/path/to/fort";
{% endhighlight %}
    </div>
</section>
