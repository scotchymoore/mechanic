class Api::ServiceController < ApplicationController
  before_action :set_service, only: [:edit, :update, :destroy]

  def index
    render json: Service.all
  end

  def create
    service = Service.create(service_params)
      if service.save
        render json: service
      else
        render json: {errors: service.errors.full_messages.join(',')}, status: 422
      end
  end

  def edit
  end

  def update
    if @service.update(service_params)
      render json: service
    else
      render json: {errors: service.errors.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @service.destroy
  end

private

  def service_params
    params.require(:service).permit(:title, :description, :price)
  end

  def set_service
    @service = Service.find(params[:service_id])
  end

end
