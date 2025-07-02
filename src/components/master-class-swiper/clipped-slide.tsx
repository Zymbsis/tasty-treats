import * as motion from "motion/react-client";
import Image, { ImageProps } from "next/image";

const ClippedSlide = ({ alt, ...props }: ImageProps) => (
  <motion.div
    initial={{ opacity: 0, y: "100%" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="rounded-hero-lg bg-slide relative w-[222px] md:w-[351px]"
  >
    <Image
      alt={alt}
      fill
      priority
      unoptimized
      className="rounded-hero-lg object-cover"
      {...props}
    />
  </motion.div>
);

export default ClippedSlide;
