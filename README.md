# xl-client
UI for the Excel Management Application

## Setup
This UI is currently using ExtJS 5. As such you should download Sencha Cmd: http://www.sencha.com/products/sencha-cmd/

Next fork and clone the repository into some local directory:
<pre><code>$ cd /w/git</code></pre>
<pre><code>$ git clone git@github.com:SDP-Inc/xl-client.git</code></pre>

Navigate to the newly created ext-src directory and start sencha watch, which will compile and watch for changes (re-compiling when it sees any)
<pre><code>$ cd /w/git/xl-client/ext-src</code></pre>
<pre><code>$ sencha app watch</code></pre>

Next start your favourite web server in the ext-src directory. Python within command prompt ex (assuming your git workspace is at W:\git\):
<pre><code>$ W:</code></pre>
<pre><code>$ cd git\xl-client\ext-src</code></pre>
<pre><code>$ python -m SimpleHTTPServer</code></pre>

Next navigate to http://localhost:8000 in your favorite browser
