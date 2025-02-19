import { describe, expect, vi, beforeEach, afterEach, it } from "vitest";
import { render } from "@solidjs/testing-library";
import { screen } from '@testing-library/dom';
import Banner from '.';

describe("Banner", () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const propData = {
    title: "Welcome to my website",
    children: <>
      <p>My name is Kurtis Rogers, a proper Software Engineer from Bristol, UK</p>
      <ul>
        <li>Specialising in Frontend technology since 2018</li>
        <li>Expert in leading frameworks including serverside Node development (Express/Koa)</li>
        <li>Experienced in building and developing accessible themes in both Drupal and WordPress</li>
        <li>Effective and approachable mentor</li>
        <li>Team player, able to build robust yet relaxed relationships with colleagues and stakeholders alike</li>
      </ul>
      <p>Want to know more?</p>
      <a class="button" href="/about">Read more about me</a>
    </>,
    backgroundImage: {
      src: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Something',
    },
    gridLayout: "wide",
  }

  it("renders", () => {
    const { container } = render(() => <Banner {...propData} />);
    expect(container).toMatchSnapshot();
  });
  
  it("has a title", () => {
    const { getByText } = render(() => <Banner {...propData} />);
    
    expect(getByText(/Welcome to my website/i)).toBeInTheDocument();
  });
  
  it("can have a image", () => {
    render(() => <Banner {...propData} />);
    
    // Find the image inside the picture element
    const image = screen.getByAltText(/Something/i);
    
    // Check if the image exists and has the correct alt text
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", propData.backgroundImage.src);
  });
});