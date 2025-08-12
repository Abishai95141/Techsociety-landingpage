import { motion } from "framer-motion";

const JoinQR = () => {
  return (
    <section aria-labelledby="join-qr-heading" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="join-qr-heading" className="sr-only">
          Join Tech Society QR Code
        </h2>
        <motion.figure
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md"
        >
          <img
            src="/lovable-uploads/3cf0fee0-3fb1-438e-a70e-b372f4bfd63d.png"
            alt="Join Tech Society QR code"
            loading="lazy"
            decoding="async"
            width={960}
            height={768}
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            Scan to join Tech Society
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default JoinQR;
