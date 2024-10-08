package com.chef.app.recipe;

import com.chef.app.comment.CommentDTO;

public class RecipeReviewDTO extends CommentDTO {

	private Long recipe_num;
	private Long recipe_rating;
	private Long review_num;

	public Long getRecipe_num() {
		return recipe_num;
	}

	public void setRecipe_num(Long recipe_num) {
		this.recipe_num = recipe_num;
	}

	public Long getReview_num() {
		return review_num;
	}

	public void setReview_num(Long review_num) {
		this.review_num = review_num;
	}

	public Long getRecipe_rating() {
		return recipe_rating;
	}

	public void setRecipe_rating(Long recipe_rating) {
		this.recipe_rating = recipe_rating;
	}

}
