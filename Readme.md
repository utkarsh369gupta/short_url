## Problem statement -->

URL Shortner:

Design a url shortener service that takes in a valid url and returns a shortened url, redirecting the user to the previously provided url.

Also, keep track of total visits/clicks on the url.

- >routes:

    - Post/url - Generated a new short url and returns the shortened url in the format example.com/random-id.

    - get/:id - Redirects the user to the original url

    - get/url/analytics/:id - Returns the clicks for the provided  email id