import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-blog-icon-chrome-blog-png-image_10540262.png"
        alt="Blog Logo"
        style={{ width }}
      />
    </div>
  );
}

export default Logo;
