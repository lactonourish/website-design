/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: blogposts
 * Interface for BlogPosts
 */
export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  featuredImage?: string;
  /** @wixFieldType date */
  publishDate?: Date | string;
}


/**
 * Collection ID: faq
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
  /** @wixFieldType datetime */
  lastUpdated?: Date | string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  shortSummary?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType url */
  bookingLink?: string;
  /** @wixFieldType text */
  price?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  testimonialText?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  clientPhoto?: string;
  /** @wixFieldType date */
  testimonialDate?: Date | string;
  /** @wixFieldType text */
  serviceReceived?: string;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
}
