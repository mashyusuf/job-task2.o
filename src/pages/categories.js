import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Categories</h1>
      <ul className="space-y-4">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="p-4 border rounded-md shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">
              {cat.cat_name_bn} ({cat.cat_name_en})
            </h2>
            <p>দোয়ার সংখ্যা: {cat.no_of_dua}</p>
            <p>সাব-ক্যাটেগরি সংখ্যা: {cat.no_of_subcat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
