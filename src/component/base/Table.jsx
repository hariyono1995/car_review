function TheadOrTfoot({ titleColumns = [] }) {
  const theading = titleColumns?.map((title) => (
    <th className="text-center" key={title}>
      {title}
    </th>
  ));

  return (
    <thead className="table-dark">
      <tr>{theading}</tr>
    </thead>
  );
}

export { TheadOrTfoot };
