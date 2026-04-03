import React from "react";
import styled from "styled-components";

const PhotoGridItem = ({ id, src, sourcesAvif, sourcesJpg,  alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={sourcesAvif.join(', ')} />
          <source type="image/jpg" srcSet={sourcesJpg.join(', ')} />
          <Image src={src} alt={alt} />
        </picture>{" "}
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>
            <TagText>
              {tag}
            </TagText>
          </Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

const TagText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`

export default PhotoGridItem;
