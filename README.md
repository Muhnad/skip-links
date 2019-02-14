# Skip links
> React component that helps you to add skip navigation links.

Read about skip links:
- [skip to main content](https://www.w3.org/TR/WCAG20-TECHS/G1.html)
- [skip navigation](https://webaim.org/techniques/skipnav/)


## Install
```bash
  npm install -S skip-links
```

## Usage
1. Import component
```js
  import SkipLinks from 'skip-links'
```
2. Call component and pass `props`
```js
  render() {
    const links = [
      {title: 'Skip to main content', to: 'main'},
      {title: 'Skip to footer', to: 'footer'}
    ];

    return (
      <SkipLinks links={links}/>
    )
  }
```

## Props
Prop            | Type  | required  | Description
--------------- | ---------- | --------- | ----------------------
`links`         | Array     | True     | Add links you need to show as object have `title` and `to`.


Shape of array:
```js
  [
    {
      title: String Required, // Text you need to show
      to: String Required //  Destination ID without hash '#'
    }
  ]
```


## Q&A
- How to customize the skip links?
  1. you can pass style attribute directly to component example:
  ```html
    <SkipLinks links={links} style={{backgroundColor: 'red', ...}}/>
  ```
  2. you can override the class `.c-links__item`


## Contributing

> Hey there! Thanks for your interest in helping out. If you happen to
> run into any issues, please
> [open an issue](https://github.com/Muhnad/skip-links/issues/new),
> and I'll do my best to help out.

To begin contributing, you'll first need to
[clone this repository](https://help.github.com/articles/cloning-a-repository/),
then navigate into the repository's directory.

```
git clone git@github.com:{{ YOUR_USERNAME }}/skip-links.git

cd skip-links
```

Next, install the dependencies using [npm](https://www.npmjs.com/).

```
npm install
```
Great! – you're ready to contribute!

Just create your git branch and run code locally. To do that, execute the start command:

commands        | Description
--------------- | ----------
`npm start`     | Run project locally on port=3000 and running demo.
`npm test`     | Run test cases.


That's All. Thanks.
