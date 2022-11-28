# Tailwind
Taiwind is a styling library for web pages, it can be used in pure HTML and CSS pages but also everywhere CSS is available (this includes React).
This intro will assume you are using React as a UI library.

## Some concepts
- CSS Primitives
- CSS utility classes

## Intro
It can seem a bit daunting and and awfull amount of classNames inside your Components.
But you can mentally divide your component into a logic section and a style section:

Example:
```
function Example() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(www.api.example);
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, [])

  return (
    <div
      className="bg-pink-100 max-w-md p-6 rounded-sm"
    >
      <h1
        className="font-bold text-purple-900"
      >
        {data.title}
      </h1>
      <p
        className="mt-2"
      >
        {data.text}
      </p>
    </div>
  )
};
```
Logic:
```
function Example() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(www.api.example);
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, [])
```
Styling:
```
  return (
    <div
      className="bg-pink-100 max-w-md p-6 rounded-sm"
    >
      <h1
        className="font-bold text-purple-900"
      >
        {data.title}
      </h1>
      <p
        className="mt-2"
      >
        {data.text}
      </p>
    </div>
  )
};
```