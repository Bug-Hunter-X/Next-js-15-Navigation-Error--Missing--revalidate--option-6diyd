```javascript
// pages/about.js

export async function getServerSideProps(context) {
  // Add revalidate option
  return {
    props: {},
    revalidate: 10 // Revalidate every 10 seconds
  };
}

export default function About({data}) {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```