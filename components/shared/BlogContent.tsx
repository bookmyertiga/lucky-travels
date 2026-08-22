import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { BlogBlock, RichTextNode } from "@/data/blog";

const isSafeInternalLink = (href: string) => href.startsWith("/") && !href.startsWith("//");
const isSafeExternalLink = (href: string) => /^https:\/\//i.test(href) || /^mailto:/i.test(href) || /^tel:/i.test(href);

function renderInlineNodes(nodes: RichTextNode[]): ReactNode[] {
  return nodes.map((node, index) => {
    if (node.type === "text") {
      return <Fragment key={`text-${index}`}>{node.text}</Fragment>;
    }

    if (node.type === "bold") {
      return <strong key={`bold-${index}`}>{renderInlineNodes(node.children)}</strong>;
    }

    if (node.type === "link") {
      const content = node.children.length ? renderInlineNodes(node.children) : [node.text ?? "Link"];

      if (isSafeInternalLink(node.href)) {
        return (
          <Link key={`link-${index}`} href={node.href} className="inline break-words font-semibold text-purple-700 underline decoration-2 underline-offset-2 transition-colors hover:text-purple-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
            {content}
          </Link>
        );
      }

      if (isSafeExternalLink(node.href)) {
        const isHttps = /^https:\/\//i.test(node.href);
        return (
          <a
            key={`link-${index}`}
            href={node.href}
            target={isHttps ? "_blank" : undefined}
            rel={isHttps ? "noopener noreferrer" : undefined}
            className="inline break-words font-semibold text-purple-700 underline decoration-2 underline-offset-2 transition-colors hover:text-purple-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          >
            {content}
          </a>
        );
      }

      return <Fragment key={`link-${index}`}>{content}</Fragment>;
    }

    return null;
  });
}

function renderBlock(block: BlogBlock, index: number): ReactNode {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={`paragraph-${index}`} className="mt-6 text-left text-lg leading-8 text-slate-700 first:mt-0 sm:text-justify sm:leading-8 sm:[text-wrap:pretty] hyphens-auto">
          {renderInlineNodes(block.content)}
        </p>
      );
    case "h2":
      return (
        <h2 key={`h2-${index}`} className="mt-12 text-2xl font-black tracking-[-0.03em] text-slate-900 sm:text-3xl">
          {renderInlineNodes(block.content)}
        </h2>
      );
    case "h3":
      return (
        <h3 key={`h3-${index}`} className="mt-8 text-xl font-black tracking-[-0.02em] text-slate-900 sm:text-2xl">
          {renderInlineNodes(block.content)}
        </h3>
      );
    case "ul":
      return (
        <ul key={`ul-${index}`} className="mt-6 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
          {block.items.map((item, itemIndex) => (
            <li key={`ul-item-${itemIndex}`}>{renderInlineNodes(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={`ol-${index}`} className="mt-6 list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-700">
          {block.items.map((item, itemIndex) => (
            <li key={`ol-item-${itemIndex}`}>{renderInlineNodes(item)}</li>
          ))}
        </ol>
      );
    case "blockquote":
      return (
        <blockquote key={`blockquote-${index}`} className="mt-8 whitespace-pre-line border-l-4 border-purple-600 bg-purple-50 p-5 text-lg italic leading-8 text-slate-700">
          {renderInlineNodes(block.content)}
        </blockquote>
      );
    case "image": {
      const image = (
        <div key={`image-${index}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src={block.src}
            alt={block.alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 900px"
            className="h-auto w-full object-cover"
          />
        </div>
      );

      if (!block.href) {
        return (
          <figure key={`figure-${index}`} className="mt-8">
            {image}
            {block.caption ? <figcaption className="mt-3 text-sm text-slate-600">{block.caption}</figcaption> : null}
          </figure>
        );
      }

      const wrappedImage = isSafeInternalLink(block.href) ? (
        <Link href={block.href} className="block">
          {image}
        </Link>
      ) : /^https:\/\//i.test(block.href) ? (
        <a href={block.href} target="_blank" rel="noopener noreferrer" className="block">
          {image}
        </a>
      ) : null;

      if (!wrappedImage) {
        return (
          <figure key={`figure-${index}`} className="mt-8">
            {image}
            {block.caption ? <figcaption className="mt-3 text-sm text-slate-600">{block.caption}</figcaption> : null}
          </figure>
        );
      }

      return (
        <figure key={`figure-${index}`} className="mt-8">
          {wrappedImage}
          {block.caption ? <figcaption className="mt-2 text-sm leading-6 text-slate-600">{block.caption}</figcaption> : null}
        </figure>
      );
    }
    default:
      return null;
  }
}

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return <div>{blocks.map((block, index) => renderBlock(block, index))}</div>;
}
