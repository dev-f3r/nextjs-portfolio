import { capFirst } from "../lib/utils";

export default function Section({
  title,
  inViewRef,
}: {
  title: string;
  inViewRef?: (node?: Element | null | undefined) => void;
}) {
  return (
    <section
      id={`${title}Section`}
      className={`h-[500px] pt-10`}
      ref={inViewRef}
    >
      <h2>{capFirst(title)}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex,
        sed dignissimos temporibus molestias quis mollitia consequatur
        voluptates, ab aspernatur explicabo aperiam tempore quidem hic sequi!
        Odio placeat rerum autem enim non, assumenda aperiam esse cum, adipisci
        perspiciatis, accusamus corporis.
      </p>
    </section>
  );
}
