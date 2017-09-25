class Api::CardsController < ApplicationController
  before_action :set_api_card, only: [:show, :update, :destroy]

  # GET /api/cards
  def index
    @api_cards = Card.all

    render json: @api_cards
  end

  # GET /api/cards/1
  def show
    render json: @api_card
  end

  # POST /api/cards
  def create
    @api_card = Card.new(api_card_params)

    if @api_card.save
      render json: @api_card, status: :created
    else
      render json: @api_card.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/cards/1
  def update
    if @api_card.update(api_card_params)
      render json: @api_card
    else
      render json: @api_card.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/cards/1
  def destroy
    @api_card.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_card
      @api_card = Card.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_card_params
      params.fetch(:card).permit(:name, :description, :category)
    end
end
