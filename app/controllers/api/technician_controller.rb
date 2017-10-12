class Api::TechnicianController < ApplicationController
  before_action :set_technician, only: [:update, :destroy]

  def index
    render json: Technician.all
  end

  def create
    service = Technician.create(technician_params)
      if technician.save
        render json: technician
      else
        render json: {errors: technician.errors.full_messages.join(',')}, status: 422
      end
  end

  def update
    if @technician.update(technician_params)
      render json: technician
    else
      render json: {errors: technician.errors.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @technician.destroy
  end

private
  def technician_params
    params.require(:technician).permit(:name, :bio, :picture_url)
  end

  def set_technician
    @technician = Technician.find(params[:picture_url_id])
  end
end
