# Routing with S3 static bucket

For setting up a bucket for static hosting, see: https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html

In the section under static hosting sections called "Redirection Rules", add:
```json
[
  {
    "Condition": {
      "HttpErrorCodeReturnedEquals": "403"
    },
    "Redirect": {
      "ReplaceKeyPrefixWith": "#/"
    }
  }
]
```

In [src/index.js](./src/index.js), note the section with:

```javascript
const replaceHashPath = () => {
  const history = createBrowserHistory()
  const hash = history.location.hash
  if (hash) {
    const path = hash.replace(/^#/, '')
    if (path) {
      history.replace(path)
    }
  }
}
replaceHashPath()
```

And that's it!
