import Link from "next/link";

const Header = ({ title, HrefLink, TitleLink }) => {
  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-lg font-semibold text-color-1 ">{title}</h1>
        {HrefLink && TitleLink ? (
          <Link
            href={HrefLink}
            className="text-sm font-medium text-black hover:text-color-1"
          >
            {TitleLink}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header