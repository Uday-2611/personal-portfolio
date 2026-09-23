import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";
export const runtime = "nodejs";

const boska = readFile(
  path.join(process.cwd(), "src", "app", "fonts", "Boska-Regular.ttf"),
);

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          color: "#151515",
          display: "flex",
          fontFamily: "Boska",
          fontSize: 54,
          height: "100%",
          justifyContent: "center",
          lineHeight: 1,
          paddingBottom: 3,
          width: "100%",
        }}
      >
        U
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Boska",
          data: await boska,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
