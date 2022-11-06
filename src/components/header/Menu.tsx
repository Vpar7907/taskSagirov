const menuItemsData: string[] = [
  "Главная",
  "Технология",
  "График полетов",
  "Гарантии",
  "О компании",
  "Контакты",
];

interface Props {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

function Menu({ open, setOpen }: Props): JSX.Element {
  return (
    <nav
      className={`menu ${open ? "open" : ""}`}
      onClick={() => setOpen(false)}
    >
      <ul>
        {menuItemsData.map((item, index) => (
          <li
            className="menu-item"
            key={index}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              e.stopPropagation();
            }}
          >
            <div className="border-menu">{item}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
