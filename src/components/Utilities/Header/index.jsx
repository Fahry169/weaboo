import Link from "next/link";

const Header = ({ title, HrefLink, TitleLink, desc }) => {
  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="text-xl font-semibold text-white pb-1">{title}</h1>
          <h3 className="text-color-2 text-sm">{desc}</h3>
        </div>
        {HrefLink && TitleLink ? (
          <Link
            href={HrefLink}
            className="text-sm font-medium text-color-2 hover:text-white"
          >
            {TitleLink}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;