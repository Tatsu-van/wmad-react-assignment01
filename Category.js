function Category(prop) {
  return (
    <li className="cat-link left valign-wrapper">
      <i className="material-icons">{prop.data.icon}</i>
      {prop.data.title}
    </li>
  );
}
